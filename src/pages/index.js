import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component{  
render(){
  const infoPerson = this.props.data.allContentfulAboutMe.edges;
  
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
      <div className="whatWeSection pt-5">
        <div className="container">
          <div className="row"  >
        {
          infoPerson.map(item =>{
return(
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
  <div className="card border-0 text-center py-3">   
      <div className="card-body">
          <div className="mb-3">
          <Link to={`${item.node.slug}`}>
              <img src={item.node.avatar.file.url} title={item.node.name} alt="Android-icon" width="120" className="rounded-circle"/>
          </Link>
          </div>
          <h5 className="">{ item.node.name }</h5>
          <p className="card-text text-blue "> {item.node.designation} </p>                               
      </div>
  </div>
</div>

  
)
            
          })
        }
        <br clear="all" />
        </div>
        </div>        
      </div>
      </div>
    </Layout>
  )

}

}

export default IndexPage
export const personInfo = graphql`
  query personInfo{
    allContentfulAboutMe{
      edges{
        node{
           slug
           name
           designation
           avatar {
            file {
              url
            }
           }
          
        }
      }
    }
  }
` 



