import React from 'react'
import {useParams} from 'react-router-dom'
import PageNotFound from '../components/PageNotFound';

const GeneratePage = (pagename) =>{
  const component =()=> require(`../pages/${pagename}`).default;
  
  try {
    return React.createElement(component())
  } catch (error) {
    return <PageNotFound/>
  }
}

const PageRender = () => {
  const {page,slug} = useParams();
  let pagename = "";

  slug ? pagename=`${page}/[slug]` : pagename = `${page}`


  return GeneratePage(pagename)
}

export default PageRender