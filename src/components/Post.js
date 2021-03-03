import React from 'react'
import marked from 'marked'


const Post = ({ article }) => {
    console.log(article)
    const {exerciseName, featuredImage, description} = article.fields
    const postDescription = marked(description)
    return (
        <div className='post'>
           <h2 className='title'>{exerciseName}</h2>
           {featuredImage &&<img className=' featuredImage' src={featuredImage.fields.file.url} alt={exerciseName} title={exerciseName} />}
           <section dangerouslySetInnerHTML={{__html: postDescription }} />
        </div>
    )
}


export default Post;

