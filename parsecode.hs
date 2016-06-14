{-# LANGUAGE OverloadedStrings #-}
module ParseCode where

import Control.Applicative ((<$>), (*>))
import Control.Monad
import Data.Foldable
import Data.List
import Hakyll
import Text.Parsec as P
import Text.Parsec.String (Parser)
import Text.Printf

stripPrefix' :: String -> String -> String
stripPrefix' xs ys = case stripPrefix xs ys of
    Nothing -> xs
    Just zs -> zs

stripSuffix' :: String -> String -> String
stripSuffix' xs ys = reverse $ stripPrefix' (reverse xs) (reverse ys)

highlightHtmlCompiler :: Compiler (Item String)
highlightHtmlCompiler = do
    body <- fmap itemBody getResourceBody
    let maybeChunks = parse toplevel "" body
        chunks :: [Token]
        chunks = case maybeChunks of
            Left err -> error $ show err
            Right xs -> xs
        pandoc' :: Token -> Compiler String
        pandoc' chunk = itemBody <$> (renderPandoc $ Item "highlighthtml.md" $ show chunk)

        chunkCompiler :: Compiler [String]
        chunkCompiler = mapM (\chunk -> case chunk of
            Prose str -> pure str
            InlineCode{} -> (stripPrefix' "<p>" . stripSuffix' "</p>") <$> pandoc' chunk
            _ -> pandoc' chunk) chunks

        result :: Compiler String
        result = mconcat <$> chunkCompiler

    makeItem =<< result

data Token
    = Prose String
    | InlineCode String String
    | BlockCode String

instance Show Token where
    show (Prose str) = str
    show (InlineCode code opts) = if length opts > 0
        then printf "`%s`{%s}" code opts
        else printf "`%s`" code
    show (BlockCode str) = printf "```%s```" str

toplevel :: Parser [Token]
toplevel = many1 $ choice
    [ blockCode
    , inlineCode
    , (Prose <$> manyTill1 anyChar ((try (lookAhead $ char '`') >> return ()) <|> eof))
    ]

inlineCode :: Parser Token
inlineCode = (do
    char '`'
    code <- manyTill1 anyChar (char '`')
    spaces
    options <- option "" $ char '{' *> manyTill1 anyChar (char '}')
    return $ InlineCode code options) <?> "inline code block"

blockCode :: Parser Token
blockCode = BlockCode <$> (try (string "```") *> manyTill1 anyChar (string "```")) <?> "code block"

manyTill1 :: Stream s m t => ParsecT s u m a -> ParsecT s u m end -> ParsecT s u m [a]
manyTill1 p end = liftM2 (:) p (manyTill p end)
