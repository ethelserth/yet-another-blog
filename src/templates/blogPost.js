import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { parseImageUrl } from 'notabase/src/utils'


export default ({ data }) => {
  const { posts: { title, tags, publish_date, html, url, slug, desc, color, cover_image } } = data
  var image_url = cover_image.toString().split('/').join('%2f');
  var image_url2 = image_url.split(':').join('%3A');
  var final_image_url = 'https://www.notion.so/image/'+image_url2; 
  var css = 'header{background-image: url(../static/images/overlay.png), url('+final_image_url+')!important;}';
  return (
    <Layout>
      <div id = "main">
        <div>{tags && tags.join(', ')}</div> 
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <style>
           {css}
      </style>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
      url
      desc
      color
      cover_image
    }
  }
`