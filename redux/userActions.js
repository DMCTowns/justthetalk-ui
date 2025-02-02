// This file is part of the JUSTtheTalkUI distribution (https://github.com/jdudmesh/justthetalk-ui).
// Copyright (c) 2021 John Dudmesh.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import { toast } from 'react-toastify'

import {
  fetchUserAPI,
  updateUserViewTypeAPI,
  updateUserAutoSubscribeAPI,
  updateUserBioAPI,
  markUserFolderSubsReadAPI,
  markUserDiscussionSubsReadAPI,
  deleteUserFolderSubsAPI,
  deleteUserDiscussionSubsAPI,
  setDiscussionUnreadAPI,
  loginUserAPI,
  logoutUserAPI,
  updateUserPasswordAPI,
  updateUserPasswordFromKeyAPI,
  validatePasswordResetKeyAPI,
  ignoreUserAPI,
  setFolderSubscriptionStatusAPI,
  unsetFolderSubscriptionStatusAPI,
  setDiscussionSubscriptionStatusAPI,
  unsetDiscussionSubscriptionStatusAPI,
  updateFolderSubscriptionStatusAPI,
  updateUserSortFoldersAPI,
  updateUserSubscriptionFetchOrderAPI,
  createReportAPI,
  fetchDiscussionAPI,
  openWebsocketAPI,
  closeWebsocketAPI,
  createUserAPI,
  fetchIgnoredUsersAPI,
  fetchDiscussionSubscriptionsAPI,
  fetchFolderSubscriptionsAPI,
  fetchFolderSubscriptionExceptionsAPI,
  fetchOtherUserAPI,
  sendForgotPasswordRequestAPI,
  confirmUserAccountKeyAPI,
  updateCurrentBookmarkAPI,
  fetchPostsAPI
} from '../api'

import {
  setUserLoadingState,
  setUserActionState,
  setActionError,
  clearUser,
  setUser,
  mergeUser,
  setCurrentFolder,
  setCurrentDiscussion,
  mergeCurrentFolder,
  mergeCurrentDiscussion,
  setDiscussionSubscriptions,
  setFolderSubscriptions,
  setFolderSubscriptionExceptions,
  setOtherUser,
  setCurrentBookmark,
  setPendingDiscussionUpdate,
  setMergePendingPosts,
  setPasswordResetKeyValid
} from './userSlice'

import { clearDiscussions } from './discussionSlice'

import { mergePosts, clearPosts } from './postSlice'

import { fetchPosts } from './postActions'

import { fetchFolders } from './folderActions'

import { clearFrontPageItems } from './frontPageSlice'

import { updateFrontPageFromFrontPageEntry, updateFrontPageItemsFromBookmark } from './frontPageActions'

import { setBlockedUsers } from './adminSlice'

import { updateDiscussionItemsFromFrontPageEntry } from './discussionSlice'

import { LoadingState } from './constants'

export const createWebsocket = () => (dispatch, getState) => {
  const eventListener = message => {
    let state = getState()

    let frontPageEntry = JSON.parse(message)

    dispatch(updateUserStateFromFrontPageEntry(frontPageEntry))
    dispatch(updateFrontPageFromFrontPageEntry(frontPageEntry))
    dispatch(updateDiscussionItemsFromFrontPageEntry(frontPageEntry))
  }

  openWebsocketAPI(eventListener)
}

const handleUserDetailsSuccess = dispatch => user => {
  dispatch(setUser(user))
  dispatch(createWebsocket())
  dispatch(setUserLoadingState(LoadingState.Loaded))
  dispatch(fetchFolders())
  return true
}

const handleUserDetailsFailure = dispatch => err => {
  dispatch(clearUser())
  dispatch(setActionError(err.response.data.message))
  dispatch(setUserLoadingState(LoadingState.Failed))
  return false
}

export const loginUser = credentials => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  loginUserAPI(credentials).then(handleUserDetailsSuccess(dispatch)).catch(handleUserDetailsFailure(dispatch))
}

export const logoutUser = credentials => dispatch => {
  dispatch(setUserLoadingState(LoadingState.Loading))

  logoutUserAPI()
    .then(res => {
      dispatch(clearUser())
      closeWebsocketAPI()
      dispatch(fetchFolders())
    })
    .catch(err => {
      dispatch(clearUser())
      dispatch(setUserLoadingState(LoadingState.Failed))
      console.error(err)
      toast.error('Logout failed')
    })
}

export const sendForgotPasswordRequest = credentials => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  sendForgotPasswordRequestAPI(credentials)
    .then(user => {
      dispatch(setUserActionState(LoadingState.Loaded))
    })
    .catch(err => {
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const fetchUser = () => dispatch => {
  dispatch(setUserLoadingState(LoadingState.Loading))

  fetchUserAPI()
    .then(res => {
      if (res) {
        dispatch(setUser(res.data.data))
        dispatch(createWebsocket())
      } else {
        dispatch(clearUser())
        closeWebsocketAPI()
      }
      dispatch(setUserLoadingState(LoadingState.Loaded))
      dispatch(fetchFolders())
    })
    .catch(err => {
      dispatch(clearUser())
      dispatch(setUserLoadingState(LoadingState.Loaded))
      console.error(err)
    })
}

export const updateUserViewType = viewType => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserViewTypeAPI(viewType)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(clearFrontPageItems())
      dispatch(setUserActionState(LoadingState.Loaded))
    })
    .catch(err => {
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateUserAutoSubscribe = autoSubscribe => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserAutoSubscribeAPI(autoSubscribe)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Auto-subscribe updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateUserSortFolders = sortFoldersByActivity => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserSortFoldersAPI(sortFoldersByActivity)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Folder sorting updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateUserSubscriptionFetchOrder = subscriptionFetchOrder => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserSubscriptionFetchOrderAPI(subscriptionFetchOrder)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Folder sorting updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateUserBio = bio => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserBioAPI(bio)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Profile saved')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const markUserFolderSubsRead = subs => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  markUserFolderSubsReadAPI(subs)
    .then(res => {
      dispatch(setFolderSubscriptions(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Subscriptions updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const markUserDiscussionSubsRead = subs => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  markUserDiscussionSubsReadAPI(subs)
    .then(res => {
      dispatch(setDiscussionSubscriptions(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Subscriptions updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const deleteUserFolderSubs = subs => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  deleteUserFolderSubsAPI(subs)
    .then(res => {
      dispatch(setFolderSubscriptions(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Subscriptions saved')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const deleteUserDiscussionSubs = subs => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  deleteUserDiscussionSubsAPI(subs)
    .then(res => {
      dispatch(setDiscussionSubscriptions(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Subscriptions saved')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateUserPassword = credentials => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserPasswordAPI(credentials)
    .then(res => {
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Password updated')
    })
    .catch(err => {
      dispatch(setUserActionState(LoadingState.Failed))
      dispatch(setActionError(err.response.data.message))
    })
}
export const updateUserPasswordFromKey = credentials => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateUserPasswordFromKeyAPI(credentials)
    .then(res => {
      dispatch(setUser(res.data.data.user))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Password updated')
    })
    .catch(err => {
      dispatch(setUser(null))
      dispatch(setUserActionState(LoadingState.Failed))
      dispatch(setActionError(err.response.data.message))
    })
}

export const setDiscussionUnread = discussion => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  setDiscussionUnreadAPI(discussion)
    .then(res => {
      let posts = res.data.data
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Discussion marked unread')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const ignoreUser = (ignoreUserId, shouldIgnore) => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))
  dispatch(setActionError(null))

  ignoreUserAPI(ignoreUserId, shouldIgnore)
    .then(res => {
      dispatch(mergeUser(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Ignored users list updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const setFolderSubscriptionStatus = (folder, subscriptionStatus) => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  let action = subscriptionStatus ? setFolderSubscriptionStatusAPI(folder) : unsetFolderSubscriptionStatusAPI(folder)
  action
    .then(res => {
      dispatch(mergeCurrentFolder(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Folder subscription status updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const setDiscussionSubscriptionStatus = (folder, subscriptionStatus) => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  let action = subscriptionStatus
    ? setDiscussionSubscriptionStatusAPI(folder)
    : unsetDiscussionSubscriptionStatusAPI(folder)
  action
    .then(res => {
      dispatch(mergeCurrentDiscussion(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success(subscriptionStatus ? 'Subscription added' : 'Subscription removed')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const updateFolderSubscriptionStatus = subscriptions => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  updateFolderSubscriptionStatusAPI(subscriptions)
    .then(res => {
      dispatch(setFolderSubscriptions(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Folder subscription list updated')
    })
    .catch(err => {
      console.error(err)
      toast.error('Update failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const createReport = (postId, name, email, body) => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  createReportAPI(postId, name, email, body)
    .then(res => {
      dispatch(setUserActionState(LoadingState.Loaded))
      toast.success('Report submitted')
    })
    .catch(err => {
      console.error(err)
      toast.error('Submission failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const fetchCurrentDiscussion = (folder, discussionId) => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))
  dispatch(setCurrentDiscussion(null))
  dispatch(setBlockedUsers({}))

  fetchDiscussionAPI(folder, discussionId)
    .then(res => {
      dispatch(setCurrentDiscussion(res.data.data))
      dispatch(setUserActionState(LoadingState.Loaded))
    })
    .catch(err => {
      console.error(err)
      toast.error('Action failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const createUser = credentials => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  return createUserAPI(credentials).then(handleUserDetailsSuccess(dispatch)).catch(handleUserDetailsFailure(dispatch))
}

export const fetchIgnoredUsers = () => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  fetchIgnoredUsersAPI()
    .then(res => {
      let ignoredUsers = {}
      res.data.data.forEach(u => (ignoredUsers[u.ignoredUserId] = u))
      dispatch(mergeUser({ ignoredUsers: ignoredUsers }))
    })
    .catch(err => {
      console.error(err)
      toast.error('Action failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const fetchDiscussionSubscriptions = () => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  fetchDiscussionSubscriptionsAPI()
    .then(res => {
      dispatch(setDiscussionSubscriptions(res.data.data))
    })
    .catch(err => {
      console.error(err)
      toast.error('Action failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const fetchFolderSubscriptions = () => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  fetchFolderSubscriptionsAPI()
    .then(res => {
      dispatch(setFolderSubscriptions(res.data.data))
    })
    .catch(err => {
      console.error(err)
      toast.error('Action failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

export const fetchFolderSubscriptionExceptions = () => dispatch => {
  dispatch(setUserActionState(LoadingState.Loading))

  fetchFolderSubscriptionExceptionsAPI()
    .then(res => {
      dispatch(setFolderSubscriptionExceptions(res.data.data))
    })
    .catch(err => {
      console.error(err)
      toast.error('Action failed')
      dispatch(setUserActionState(LoadingState.Failed))
    })
}

const pendingOtherUserFetches = {}

export const fetchOtherUser = userId => (dispatch, getState) => {
  if (!pendingOtherUserFetches[userId]) {
    pendingOtherUserFetches[userId] = true

    fetchOtherUserAPI(userId)
      .then(res => {
        dispatch(setOtherUser(res.data.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const validatePasswordResetKey = key => dispatch => {
  dispatch(setUserLoadingState(LoadingState.Loading))

  validatePasswordResetKeyAPI(key)
    .then(() => dispatch(setPasswordResetKeyValid(true)))
    .catch(res => {
      if (res.response.status === 406) {
        toast.error('The password reset request has expired. Please try again.')
      }
      dispatch(setPasswordResetKeyValid(false))
    })
}

export const confirmUserAccountKey = key => dispatch => {
  dispatch(setUserLoadingState(LoadingState.Loading))

  confirmUserAccountKeyAPI(key).then(handleUserDetailsSuccess(dispatch)).catch(handleUserDetailsFailure(dispatch))
}

const setFolderLocation = (dispatch, state, nextFolder, discussionId) => {
  if (nextFolder) {
    if (state.user.currentFolder) {
      if (state.user.currentFolder.key !== nextFolder.key) {
        dispatch(setCurrentFolder(nextFolder))
      }
    } else {
      dispatch(setCurrentFolder(nextFolder))
    }
  }

  if (nextFolder && discussionId) {
    setDiscussionLocation(dispatch, state, nextFolder, discussionId)
  } else {
    dispatch(setCurrentDiscussion(null))
    dispatch(clearDiscussions())
    dispatch(clearPosts())
  }
}

const setDiscussionLocation = (dispatch, state, nextFolder, discussionId) => {
  if (state.user.currentDiscussion) {
    if (state.user.currentDiscussion.id !== parseInt(discussionId)) {
      dispatch(fetchCurrentDiscussion(nextFolder, discussionId))
      dispatch(clearPosts())
    }
  } else {
    dispatch(fetchCurrentDiscussion(nextFolder, discussionId))
    dispatch(clearPosts())
  }
}

export const setUserLocation = (folderKey, discussionId, postNum) => (dispatch, getState) => {
  const state = getState()

  if (folderKey) {
    const nextFolder = state.folder.items.find(x => x.key === folderKey)
    setFolderLocation(dispatch, state, nextFolder, discussionId)
  } else {
    setFolderLocation(dispatch, state, null)
  }

  // dispatch(setCurrentFolder(null));
  // dispatch(setCurrentDiscussion(null));
  // dispatch(clearPosts());
}

export const setCurrentDiscussionBookmark = bookmarkedPost => (dispatch, getState) => {
  const state = getState()

  let currentBookmark = state.user.currentBookmark
  if (!currentBookmark || (currentBookmark && bookmarkedPost.postNum > currentBookmark.lastPostCount)) {
    updateCurrentBookmarkAPI(state.user.currentDiscussion, bookmarkedPost)
      .then(res => {
        let bookmark = res.data.data
        dispatch(setCurrentBookmark(bookmark))
        dispatch(updateFrontPageItemsFromBookmark(bookmark))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const beginMergingPendingPosts = () => async (dispatch, getState) => {
  const state = getState()

  let pendingDiscussionUpdate = state.user.pendingDiscussionUpdate
  await dispatch(applyPendingDiscussionUpdate(pendingDiscussionUpdate))
  await dispatch(setPendingDiscussionUpdate(null))

  dispatch(setMergePendingPosts(true))
}

const updateUserStateFromFrontPageEntry = entry => (dispatch, getState) => {
  const state = getState()

  let pendingDiscussionUpdate = {
    ...state.user.currentDiscussion,
    lastPostDate: entry.lastPostDate,
    lastPostId: entry.lastPostId,
    postCount: entry.postCount
  }
  if (state.user.mergePendingPosts) {
    dispatch(applyPendingDiscussionUpdate(pendingDiscussionUpdate))
  } else {
    dispatch(setPendingDiscussionUpdate(pendingDiscussionUpdate))
  }
}
const applyPendingDiscussionUpdate = pendingDiscussionUpdate => async (dispatch, getState) => {
  const state = getState()

  let nextPostNum = 1
  if (state.post.items.length > 0) {
    nextPostNum = state.post.items[state.post.items.length - 1].postNum + 1
  }
  let pageSize = pendingDiscussionUpdate.postCount - nextPostNum
  let postResults = await fetchPostsAPI(pendingDiscussionUpdate, nextPostNum, pageSize)
  let posts = postResults.data.data
  await dispatch(mergePosts(posts))
  await dispatch(mergeCurrentDiscussion(pendingDiscussionUpdate))
}

/*

            if(state.mergePendingPosts && state.pendingDiscussionUpdate) {
                console.debug("merging pending posts");
                state.currentDiscussion = {
                    ...state.currentDiscussion,
                    lastPostDate: state.pendingDiscussionUpdate.lastPostDate,
                    lastPostId: state.pendingDiscussionUpdate.lastPostId,
                    postCount: state.pendingDiscussionUpdate.postCount
                }
                state.pendingDiscussionUpdate = null;
            }


        updateUserStateFromFrontPageEntry: (state, action) => {
            let entry = action.payload;
            if(state.currentDiscussion && state.currentDiscussion.id === entry.discussionId) {
                let discussionUpdate = {...state.currentDiscussion, lastPostDate: entry.lastPostDate, lastPostId: entry.lastPostId, postCount: entry.postCount}
                if(state.mergePendingPosts) {
                    console.debug("updating current discussion");
                    state.currentDiscussion = discussionUpdate;
                } else {
                    console.debug("updating pending discussion");
                    state.pendingDiscussionUpdate = discussionUpdate;
                }
            }
        }


*/
