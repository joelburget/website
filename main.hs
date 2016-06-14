{-# LANGUAGE OverloadedStrings #-}

module Main where

import Control.Applicative
import qualified Data.Map as M
import Data.Maybe (fromMaybe)
import Data.Monoid (mconcat, (<>))
import System.FilePath ((</>), takeBaseName, addTrailingPathSeparator,
    isAbsolute)

import Hakyll
import ParseCode

main :: IO ()
main = hakyll $ do
    match "templates/*" $ compile templateCompiler

    match "media/css/*" $ do
        route   idRoute
        compile compressCssCompiler

    let staticFiles =
            [ "media/img/**"
            , "media/js/**"
            , "media/font/**"
            , "media/video/**"
            , "favicon.ico"
            , "static/**"
            , "keybase.txt"
            ]

    match (foldl1 (.||.) staticFiles) $ do
        route   idRoute
        compile copyFileCompiler

    -- Public post pages
    match "posts/*" $ do
        route   directoryRoute
        compile $
            selectCompiler
            >>= saveSnapshot "content"
            >>= loadAndApplyTemplate "templates/base.html" postCtx

    -- Private post pages
    match "posts/private/*" $ do
        route   directoryRoute
        compile $
            selectCompiler
            >>= loadAndApplyTemplate "templates/base.html" postCtx

    -- Home page
    match "index.html" $ do
        route idRoute
        compile $ do
            let idxCtx = constField "script" "" <> defaultContext

            getResourceBody
                >>= applyAsTemplate idxCtx
                >>= loadAndApplyTemplate "templates/base.html" idxCtx

    -- /posts/
    match "posts.html" $ do
        route   directoryRoute
        compile $ do
            public <- postList "posts/*"
                               "templates/postlistitem.html"
                               recentFirst
            getResourceBody
                >>= applyAsTemplate (constField "posts" public
                           <> defaultContext)
                >>= loadAndApplyTemplate "templates/base.html" defaultContext

    match "error.html" $ do
        route idRoute
        compile $ do
            let idxCtx = constField "script" "" <> defaultContext

            getResourceBody
                >>= applyAsTemplate idxCtx
                >>= loadAndApplyTemplate "templates/base.html" idxCtx

    create ["rss.xml"] $ feedRules renderRss
    create ["atom.xml"] $ feedRules renderAtom


feedRules :: (FeedConfiguration
          -> Context String
          -> [Item String]
          -> Compiler (Item String))
          -> Rules ()
feedRules renderer = do
    route idRoute
    compile $ let feedCtx = postCtx <> bodyField "description" in
        loadAllSnapshots "posts/*" "content"
        >>= fmap (take 10) . recentFirst
        >>= renderer feedConfiguration feedCtx


directoryRoute :: Routes
directoryRoute = customRoute $ (</> "index.html") . takeBaseName . toFilePath


directoryUrlCtx :: Context a
directoryUrlCtx = field "url" $
    let makeAbsolute path = if isAbsolute path then path else "/" </> path
    in return . makeAbsolute . addTrailingPathSeparator .
       takeBaseName . toFilePath . itemIdentifier


feedConfiguration :: FeedConfiguration
feedConfiguration = FeedConfiguration
    { feedTitle       = "Software and Dinosaurs"
    , feedDescription = "Joel Burget's website"
    , feedAuthorName  = "Joel Burget"
    , feedAuthorEmail = "joelburget@gmail.com"
    , feedRoot        = "http://joelburget.com"
    }


postCtx :: Context String
postCtx = mconcat [
    -- field "nextPost" (getPostUrl After),
    -- field "prevPost" (getPostUrl Before),
    dateField "date" "%B %e, %Y",
    scriptContext,
    headerContext,
    directoryUrlCtx,
    defaultContext
    ]


data Position = Before | After


getPostUrl :: Position -> Item String -> Compiler String
getPostUrl position post = do
    posts <- getMatches "posts/*"
    let postIdent = itemIdentifier post
        ident = case position of
            Before -> lookup postIdent $ zip (tail posts) posts
            After -> lookup postIdent $ zip posts (tail posts)
    case ident of
        Just i -> (fmap (maybe empty $ toUrl) . getRoute) i
        Nothing -> empty


postList :: Pattern -> Identifier -> ([Item String] -> Compiler [Item String])
    -> Compiler String
postList pat template preprocess' = do
    postItemTmpl <- loadBody template
    posts <- preprocess' =<< loadAll pat
    applyTemplateList postItemTmpl postCtx posts


scriptContext, headerContext :: Context a
scriptContext = metaContext "script"
headerContext = metaContext "header"


metaContext :: String -> Context a
metaContext str = field str $ \item -> do
    metadata <- getMetadata (itemIdentifier item)
    return $ fromMaybe "" $ M.lookup str metadata


selectCompiler :: Compiler (Item String)
selectCompiler = do
    ext <- getUnderlyingExtension
    debugCompiler $ ext ++ "\n"
    case ext of
        ".html" -> highlightHtmlCompiler
        _ -> pandocCompiler
