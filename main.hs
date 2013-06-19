{-# LANGUAGE OverloadedStrings #-}
import Data.Map as M
import Data.Maybe (fromMaybe)
import Data.Monoid (mconcat, mappend)
import System.FilePath ((</>), takeBaseName, takeFileName)

import Hakyll
import ParseCode

main :: IO ()
main = hakyll $ do
    match "templates/*" $ compile templateCompiler

    match "journal/files/*" $ do
        route   idRoute
        compile copyFileCompiler

    match "journal/journal/*" $ do
        route   $ setExtension "html"
        compile $ pandocCompiler
            >>= loadAndApplyTemplate "templates/journal_entry.html" defaultContext
            >>= loadAndApplyTemplate "templates/base.html" journalCtx

    match "media/css/*" $ do
        route   idRoute
        compile compressCssCompiler

    match ("media/img/**" .||. "media/js/**" .||. "favicon.ico") $ do
        route   idRoute
        compile copyFileCompiler

    match "posts/*" $ do
        route   directoryRoute
        compile $
            selectCompiler
            >>= saveSnapshot "content"
            >>= loadAndApplyTemplate "templates/base.html" postCtx

    tags <- buildTags "posts/*" fromFilePath

    match "index.html" $ do
        route idRoute
        compile $ do
            posts <- postList "posts/*" "templates/postitem.html" $ return . take 5
            let idxCtx = mconcat [
                    constField "posts" posts,
                    constField "script" "",
                    defaultContext
                    ]

            getResourceBody
                >>= applyAsTemplate idxCtx
                >>= loadAndApplyTemplate "templates/base.html" idxCtx

    match "templates/404.html" $ do
        route $ customRoute $ takeFileName . toFilePath
        compile copyFileCompiler

    match "posts.html" $ do
        route   directoryRoute
        compile $ do
            public <- postList "posts/*" "templates/postlistitem.html" recentFirst
            private <- postList "posts/private/*" "templates/postlistitem.html" recentFirst
            let list = public ++ private
            getResourceBody
                >>= applyAsTemplate (constField "posts" list `mappend` defaultContext)
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
    compile $ let feedCtx = postCtx `mappend` bodyField "description" in
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

journalCtx :: Context String
journalCtx = mconcat [
      constField "script" ""
    , constField "header" ""
    , defaultContext
    ]

postList :: Pattern -> Identifier -> ([Item String] -> Compiler [Item String])
    -> Compiler String
postList pattern template preprocess' = do
    postItemTmpl <- loadBody template
    posts <- preprocess' =<< loadAll pattern
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
