{-# LANGUAGE OverloadedStrings #-}
import Data.Map as M
import Data.Maybe (fromMaybe)
import Data.Monoid (mconcat, (<>))
import System.FilePath ((</>), takeBaseName)

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
            , "404.html"
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
            posts <- postList "posts/*" "templates/postitem.html" $
                fmap (take 5) . recentFirst
            let idxCtx = mconcat [
                    constField "posts" posts,
                    constField "script" "",
                    defaultContext
                    ]

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
    dateField "date" "%B %e, %Y",
    scriptContext,
    headerContext,
    defaultContext
    ]


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
