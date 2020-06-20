import React from "react"
import { Link } from "gatsby";

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data

    var image_url = cover_image.toString().split('/').join('%2f');
    var image_url2 = image_url.split(':').join('%3A');
    var final_image_url = 'https://www.notion.so/image/'+image_url2; 
 
    return ( 
        <div style={{ margin: 10 }}>        
            <Link to={`blog/posts/${url}/`}>
              <img src={ final_image_url }></img>  
              <div style = {{color: "grey"}}>Tags: {tags && tags.join(', ')} • Published: {publish_date}</div>
              <h2>{title}</h2>
              <p style = {{ color: "black" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
            </Link>
        </div>
    )
}