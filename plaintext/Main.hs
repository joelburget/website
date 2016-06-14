{-# LANGUAGE OverloadedStrings, LiberalTypeSynonyms #-}
module Main where

import Haste.DOM
import React

-- model

type App a = a EasingState Transition AnimState

-- update

-- view

cls :: IO (App ReactClass)
cls = createClass view transition initialClassState initialAnimationState []

main :: IO ()
main = withElems ["demo"] $ \[node] -> do
    render node =<< cls
    return ()
