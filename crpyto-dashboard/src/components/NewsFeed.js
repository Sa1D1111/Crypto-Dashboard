import {useEffect, useState} from 'react'
import axios from 'axios'


const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

  useEffect(() => {


    const options = {
      method: 'GET',
      url: 'https://crypto-news-live.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY // process.env.REACT_APP_RAPID_API_KEY // USE this env key to hide API safely from public.
      }
    }

    axios.request(options).then((response) => {
      console.log(response.data)

    }).catch((error) => {
      console.error(error)
    })

     // headers: {
       // 'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
        //'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY // process.env.REACT_APP_RAPID_API_KEY    // USE this env key to hide API safely from public.
      //}
    

    axios.request(options).then((response) => {
      console.log(response.data)
      setArticles(response.data)

    }).catch((error) => {
      console.error(error)
    })
  }, [])

  //console.log(articles)

  const first10Articles = articles?.slice(67,77)


  return (
    <div className='news-feed'>
      <h2>News Feed</h2>
      {first10Articles?.map( (article, _index) => (<div key={_index}>
        <a href={article.url}><p>{article.title}</p></a>
        </div>))}
    </div>
  )
}
export default NewsFeed
