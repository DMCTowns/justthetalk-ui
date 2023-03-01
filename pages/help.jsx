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
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import { Paper, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MasterLayout from '../layouts/master'

import styles from '../styles/Support.module.scss'

export default function Help(props) {
  return (
    <MasterLayout title="JUSTtheTalk - Help">
      <div className="container">
        <Paper
          variant="outlined"
          className="breadcrumb">
          <div className="breadcrumb-item">
            <Link href="/">
              <a>
                <HomeIcon color="primary" />
              </a>
            </Link>
          </div>
          <div className="breadcrumb-item">
            <PlayArrowIcon color="action" />
          </div>
          <div className="breadcrumb-item">Help</div>
        </Paper>

        <Paper
          variant="outlined"
          className="discussionList">
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom>
            Help
          </Typography>

          <p>Welcome to JUSTthetalk.</p>

          <p>
            The aim of JUSTtheTalk is to promote discussion of the issues of the day. We support free speech, even for
            people we dislike or with whom we may disagree. We do not, however, support hatred or discrimination. Please
            read our Please read  our{' '}
            <Link href="/terms">
              <a>Terms &amp; Conditions</a>
            </Link>{' '}
            and{' '}
            <Link href="/charter">
              <a>Charter &amp; Community Standards</a>
            </Link>{' '}
            before posting. By posting on the site, you agree to abide by these terms.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Your Profile
          </Typography>
          <p>
            Each JUSTtheTalk user has a profile that can be customised by clicking the icon on the top-right of the
            banner on any page. From your profile page, you can change your password, manage your subscriptions and see
            which users you have ignored. You will also see a space to add a comment about yourself. Please note that
            any email address you place here will be visible to other users, therefore we suggest that, if you want to
            let people contact you, you create a new email address based on your username for public consumption.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Navigation
          </Typography>
          <p>
            The talkboard is organised into folders and discussion threads that are assigned broad categories. Thread
            folders can be seen on the right of your screen (on the desktop site; to view them on the mobile version,
            click on the “burger” icon), while the most recent threads are in the main panel. For registered users, your
            most recent subscribed threads will be seen at the top of the main panel.
          </p>

          <p>
            When reading a thread, you can use the buttons the bottom of a thread to navigate: to the Home page, to the
            top of the current folder, to check your other subscriptions, to the beginning of the thread, to the end of
            the thread, to move back one page, or to move forward one page (depending on the resolution of your screen,
            fewer options may be shown on the mobile version).
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Subscriptions
          </Typography>
          <p>
            You can subscribe to individual discussion threads or whole topic folders by clicking on the relevant links
            on the left hand side of the page (desktop) or at the top right (mobile).
          </p>

          <p>
            If you subscribe to a folder you will receive all unread comments in all discussions in that folder,
            including new ones as they are created.
          </p>

          <p>
            You can unsubscribe from individual discussions at any time, even if you have subscribed to the folder as a
            whole.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Posting
          </Typography>
          <p>
            You can join in with a discussion by writing your comment in the text box on the last page of a thread, and
            then clicking ‘Post Reply’. Once you have posted your comment, it will appear straight away. If you have
            made an error, you have thirty (30) minutes to edit your comment and repost it. You can also delete your
            comment entirely at any time.
          </p>

          <p>
            There are lots of in-jokes on JUSTtheTalk; don't worry, you'll soon pick them up. Don't be intimidated by
            other posters - they're no better than you - so be prepared to give as good as you get (but please don't
            resort to ad hominem attacks).
          </p>

          <p>Once again, please read our Charter and Community Standards and Terms and Conditions before posting.</p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Formatting your posts
          </Typography>
          <p>
            You can add formatting to your posts by putting a special character at the beginning of a line of text
            followed by a space and then your text. The codes are as follows:
          </p>
          <ul className={styles.noMarker}>
            <li>&gt; - quoted/small text</li>
            <li>b - bold text</li>
            <li>i - italic text</li>
            <li>u - underlined text</li>
            <li>c - centered text</li>
            <li>* - bulleted text</li>
            <li>| - spoiler (the text you put on this line will be hidden in a clickable box)</li>
            <li>] - indented text, multiple characters gives multiple indents</li>
            <li>{`}`} - force the line to be a paragraph without a blank line following (good for limericks)</li>
            <li>` - quoted text</li>
          </ul>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Search
          </Typography>
          <p>
            There is a search field at the top right of the desktop site, or under the “burger” icon on the mobile
            version. For simple searches just enter the text you are looking for in the text box and click search.
          </p>
          <p>It is also possible to search specific bits of a post. For example:</p>

          <table>
            <tr>
              <td>Search on user name:</td>
              <td>username:ezekiel</td>
            </tr>
            <tr>
              <td>Search on discussion title:</td>
              <td>thread:penguin</td>
            </tr>
          </table>
          <p>&nbsp;</p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Thread Moderation
          </Typography>
          <p>
            Moderation on JUSTtheTalk is passive, which means that we do not monitor what is posted and we will not
            remove posts unless they are reported to us. We rely on our users to keep the site safe and enjoyable for
            everyone, so please report any posts which you feel break our posting and content guidelines.
          </p>
          <p>
            Each post has a small exclamation mark icon in its bottom-left corner. Click on this to report any post that
            you feel breaches the JUSTtheTalk Terms and Conditions or Community Standards to send it to the moderation
            team for review. You will be taken to a page where you can provide your username and e-mail address and
            outline the nature of your complaint. We aim to respond to all reports within 48 hours. It is not necessary
            to be logged into the site to report a post.
          </p>
          <p>
            If you feel that a poster is annoying you but that they are not actually breaking the site Terms and
            Conditions, you can ignore that poster by clicking the crossed-out eye icon at the bottom-left of one of
            their posts. This will stop you from reading any of their posts across the entire site.
          </p>
          <p>
            While you will receive an email notification that any posts you report have been logged, please note that
            the moderation team does not generally comment publicly or privately on every moderation decision made.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Troubleshooting
          </Typography>
          <p>
            If you have any problems signing in or other problems with the site then please contact us on
            <a href="mailto:help@justthetalk.co.uk">help@justthetalk.co.uk</a>
          </p>
        </Paper>
      </div>
    </MasterLayout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}
