import sam from 'sam-pattern'

import initialState from './initial_state'

import base from './base'
import user from './user'
import home from './home'
import articleDetail from './article_detail'
import profile from './profile'

const { api, createInstance } = sam

const samInstance = api(createInstance())

// initiate state
samInstance.addInitialState(initialState)

// setup components
const [
  redirected,
  setPage
] = samInstance.addComponent(base).intents

const [
  toggleFeed,
  selectTag,
  selectPage,
  fetchArticles,
  fetchFeeds,
  fetchTags,
  favoriteArticle,
  setFavorite
] = samInstance.addComponent(home).intents

const [
  fetchArticleAndComments,
  fetchArticle,
  setDeletedComment,
  removeComment,
  postComment,
  setNewComment,
  setNewArticleInfo,
  setEditedArticle,
  setDeletedArticle,
  publishArticle,
  removeArticle
] = samInstance.addComponent(articleDetail).intents

const [
  signin,
  signup,
  setFollow,
  followUser,
  fetchUser,
  logout,
  setUserSettings,
  updateUserSettings,
  fetchProfileAndArticles
] = samInstance.addComponent(user).intents

const [
  fetchProfileArticles
] = samInstance.addComponent(profile).intents

const intents = {
  redirected,
  setPage,
  toggleFeed,
  selectTag,
  fetchArticles,
  fetchFeeds,
  fetchTags,
  signin,
  signup,
  selectPage,
  favoriteArticle,
  setFavorite,
  fetchArticleAndComments,
  fetchArticle,
  setFollow,
  followUser,
  setDeletedComment,
  removeComment,
  postComment,
  setNewComment,
  setNewArticleInfo,
  setEditedArticle,
  setDeletedArticle,
  publishArticle,
  removeArticle,
  fetchUser,
  logout,
  setUserSettings,
  updateUserSettings,
  fetchProfileAndArticles,
  fetchProfileArticles
}

export default {
  stateManager: samInstance,
  intents
}
