{-# LANGUAGE OverloadedStrings, LiberalTypeSynonyms #-}
module Main where

import MVC as MVC
import MVC.Updates as MVC

import Haste.DOM
import React

{-
You can click a cell, row, or column to mark it as taking some predicate.
-}

-- model

data Spreadsheet a = Spreadsheet
    { rows :: Int
    , cols :: Int
    , rowHeaders :: [String]
    , colHeaders :: [String]
    , values :: [[a]]
    }

type App a = a EasingState Transition AnimState

-- update

-- view

cls :: IO (App ReactClass)
cls = createClass view transition initialClassState initialAnimationState []

main :: IO ()
main = withElems ["demo"] $ \[node] -> do
    render node =<< cls
    return ()
