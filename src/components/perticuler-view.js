import React, { Component } from 'react';
import  './perticuler.css';
class Perticlur extends Component {
    
    render() {
        const post = this.props.data.contentfulAboutMe;
        console.log(post);
        return (
          <div>
            <header>
            <div className="top-line">
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-10 col-md-10 font-15">
                                      <span className="mr-3"><i className="fas fa-phone phoneFont mr-1"></i>USA <a href="tel:+1 860-9670120" className="black"> +1 860-9670120</a> <i className="fas fa-phone phoneFont mr-1 ml-2"></i>IND <a href="tel:+91 9767-024642" className="black">+91 9767-024642</a></span>
                                      <span> <i className="fas fa-envelope font-12 mr-1"></i><a href="mailto:contact@ivisionstudio.in" className="black">contact@ivisionstudio.in</a> </span>
                                  </div>  
                                  <div className="col-lg-2 col-md-2 font-14 d-flex justify-content-end">
                                      <span className="mr-2"> <a href={post.facebook} target="_blank" className="socialIcon"><i className="fab fa-facebook-f black font-14"></i></a></span>
                                     {
                                       post.instagram &&
                                    <span className="mr-2"> <a href={post.instagram} className="socialIcon" target="_blank"><i className="fab fa-instagram black font-14"></i></a></span>
                                    } 

                                     {
                                        post.linkedIn &&
                                       <span className="mr-2"> <a href={post.linkedIn} className="socialIcon" target="_blank"><i className="fab fa-linkedin-in black font-14"></i></a></span>
                                     }  
                                  </div>
                              </div>
                          </div>
                      </div>
            </header>
          <div className="Testimonial pt-5 pb-5">
           
            <div className="container">
                <div className="media">
                    <img className="mr-3" src={post.avatar.file.url} alt="Generic placeholder image" style={{    borderRadius: '50%'}}/>
                    <div className="media-body">
                        <p><i className="fas fa-quote-left"></i>
                        <div
                            dangerouslySetInnerHTML={{
                              __html: post.content.childMarkdownRemark.html,
                            }}
                            />
                        </p> 
                        <h5 className="d-inline-block">{post.name}</h5> 
                        <span className="font-14"> {post.designation}</span>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
         );
    }
}

export default Perticlur;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulAboutMe(slug: { eq: $slug }) {
      name
      designation
      facebook
      instagram
      twitter
      linkedIn
      shortBio
      avatar{
        file{
          url
        }
      }
      content{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`