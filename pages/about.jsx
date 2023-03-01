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

export default function About(props) {
  return (
    <MasterLayout title="JUSTtheTalk - About Us">
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
          <div className="breadcrumb-item">About Us</div>
        </Paper>

        <Paper
          variant="outlined"
          className="discussionList">
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom>
            About Us
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            Welcome to our site!
          </Typography>
          <p>
            The aim of JUSTtheTalk is to promote discussion of ideas at all levels. We support free speech, even for
            people we don't agree with or like. We don't support hatred or discrimination. We believe the quality of
            discussion on this site to be its key strength and so we will never clutter the site with useless junk, or
            with adverts. We guarantee that this site will remain free at the point of use.
          </p>

          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom>
            A Brief History of JUSTtheTalk
          </Typography>
          <p>
            This site was designed and built in the days after the demise of the discussion forums run by The Guardian
            newspaper, Guardian Unlimited Talkboard (GU Talk). GU Talk was a community of individuals from a wide
            variety of ages, backgrounds and places, and had several specialist boards, such as Football All Talk (FAT)
            and Film Unlimited (FU). The GU Talk boards were closed on February 25th 2011; this came as a shock to what
            had become a very close community. You can read about the closure here:
            <a href="https://www.theguardian.com/help/insideguardian/2011/feb/28/guardian-unlimited-talkboards">
              https://www.theguardian.com/help/insideguardian/2011/feb/28/guardian-unlimited-talkboards
            </a>
            .
          </p>

          <p>
            One community member took it upon himself to create and run a new forum, for which we have always been
            grateful. The first version of the new forum was called NOTtheTalk, and the design reflected our origins at
            the Guardian.
          </p>
          <p>
            Over the years new features were added, and as it took on a life of its own and GU Talk faded in memory, the
            site was rebranded to JUSTtheTalk. In 2021, with the underlying platform ageing, the site was redesigned to
            what you see today.
          </p>
          <p>
            In 2023, the site creator and owner decided to step away from the forum. In his place, a group of volunteers
            took over technical and administrative responsibility for JUSTtheTalk. No changes were made to the design,
            but new features may be added later in 2023.
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
