import React,{useRef} from "react";
import findUsImg from './Video/findUs.png';
import findUs from './Video/findUs.mp4';
import instaImg from './Video/insta.png';
import insta from './Video/insta.mp4';
import storeImg from './Video/store.png';
import store from './Video/store.mp4';
import cvImg from './Video/cv.png';
import cv from './Video/cv.mp4';
import facebook from './Video/facebook.mp4';
import facebookImg from './Video/facebookImg.png';
import blog from './Video/blog.mp4';
import blogImg from './Video/blogImg.png';

function Project() {

  const cvBtn = useRef();
  const instaBtn = useRef();
  const storeBtn = useRef();
  const findUsBtn = useRef();
  const facebookBtn = useRef();
  const blogBtn = useRef();

  function clickVideo(ref){
    ref.current.dispatchEvent(
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      }),
    );
  };


  return (
    <section className="sectionTransition">
        <h2 className="sectionTitle" id="projects">02. Projects</h2>
        <div className="projectContainer">
        <div className="singleProject">
                <div className="descriptionContainer">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Facebook Clone</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/Odinbook" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={facebookBtn} href="http://odinbookclone.herokuapp.com" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">Clone of the popular social network Facebook. <br />
                                The project is made using <em>React</em> for the front-end, <em>Express and MongoDb</em> for the back-end and <em>Firebase</em> for the storage of the picture.<br />
                                Users can create their account or use their Google profile to Log In, once the Log In is done they can share or edit their post,
                                add new friends, comment,like and save posts, modify their profile and send message to their friends.<br />
                                To handle the authentication was used <em>Passport</em> in combination with <em>Jwt.</em></p>
                        </div>
                    </div>
                </div>
                <video poster={facebookImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(facebookBtn)}>
                    <source src={facebook} type="video/mp4"/>
                </video> 
            </div>
            <div className="singleProject">
                <div className="descriptionContainerHidden">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Blogify</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/BlogApi" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={blogBtn} href="https://blogifyodinapp.herokuapp.com" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">A fictional blog website. <br />
                                The project is made using <em>React</em> for the front-end and <em>Express and MongoDB</em> for the back-end.<br />
                                Once on the website the user can see all the article published by all the users of the blog, but only when 
                                the user complete the Log-In/Sign-Up can unlock all the functionality.<br />
                                Once logged infact the user can write his own articles, leave comments on other users articles,
                                edit his articles and publish or unpublish the article that he created.<br/>
                                To handle the authentication was used <em>Passport</em> in combination with <em>Jwt.</em></p>
                        </div>
                    </div>
                </div> 
                <video poster={blogImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(blogBtn)}>
                    <source src={blog} type="video/mp4"/>
                </video>
                <div className="descriptionContainerRight">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Blogify</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/BlogApi" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" href="https://blogifyodinapp.herokuapp.com" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescriptionRight">
                        <div className="videoDescription2">
                            <p className="videoP">A fictional blog website. <br />
                                The project is made using <em>React</em> for the front-end and <em>Express and MongoDB</em> for the back-end.<br />
                                Once on the website the user can see all the article published by all the users of the blog, but only when 
                                the user complete the Log-In/Sign-Up can unlock all the functionality.<br />
                                Once logged infact the user can write his own articles, leave comments on other users articles,
                                edit his articles and publish or unpublish the article that he created.<br/>
                                To handle the authentication was used <em>Passport</em> in combination with <em>Jwt.</em></p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="singleProject">
                <div className="descriptionContainer">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Instagram Clone</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/instagram-clone" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={instaBtn} href="https://bacco40.github.io/instagram-clone/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">Clone of the popular social network Instagram. <br />
                                The project is made using <em>React and Firebase.</em><br />
                                Users can create their profile,authenticate with their Google account,share their post,
                                follow new users,comment and like post, modify their profile and send message to the user that they follow.<br />
                                To handle the authentication was used <em>Firebase authentication</em>, Firebase is also used to store the post, the accounts data and the messages.</p>
                        </div>
                    </div>
                </div>
                <video poster={instaImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(instaBtn)}>
                    <source src={insta} type="video/mp4"/>
                </video> 
            </div>
            <div className="singleProject">
                <div className="descriptionContainerHidden">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Where is Waldo?</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/photo_tagging_app" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={findUsBtn} href="https://bacco40.github.io/photo_tagging_app/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">Project based on the popular game "Where is Waldo?". <br />
                                The project is made using <em>React and Firebase.</em><br />
                                On the firebase database are stored the coordinates of all the elements to find 
                                for the various maps and the times of completion for each maps of all the users that submitted it.<br />
                                The time of completion is calculated on the backend to avoid cheats.</p>
                        </div>
                    </div>
                </div> 
                <video poster={findUsImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(findUsBtn)}>
                    <source src={findUs} type="video/mp4"/>
                </video>
                <div className="descriptionContainerRight">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Where is Waldo?</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/photo_tagging_app" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" href="https://bacco40.github.io/photo_tagging_app/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescriptionRight">
                        <div className="videoDescription2">
                            <p className="videoP">Project based on the popular game "Where is Waldo?". <br />
                                The project is made using <em>React and Firebase.</em><br/>
                                On the firebase database are stored the coordinates of all the elements to find 
                                for the various maps and the times of completion for each maps of all the users that submitted it.<br />
                                The time of completion is calculated on the backend to avoid cheats.</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="singleProject">
                <div className="descriptionContainer">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Not a Store</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/shopping_cart" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={storeBtn} href="https://bacco40.github.io/shopping_cart/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">A fictional clothing Shop. <br />
                                The project is made using <em>React and the Fake store API.</em><br />
                                Users can browser the store catalog,check the items details,add the items in the Cart,
                                modify the amount of item to add in the cart, modify and remove items from the cart and "complete" the purchase.<br />
                                The website is dinamic and change based on the user selection.</p>
                        </div>
                    </div>
                </div>
                <video poster={storeImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(storeBtn)}>
                    <source src={store} type="video/mp4"/>
                </video> 
            </div>
            <div className="singleProject">
                <div className="descriptionContainerHidden">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Cv Builder</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/cv_creator" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" ref={cvBtn} href="https://bacco40.github.io/cv_creator/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescription">
                        <div className="videoDescription2">
                            <p className="videoP">A cv builder website. <br />
                                The project is made using <em>React.</em><br />
                                On the website users can build their CV by adding their data, their work experiences,
                                their education,their skills and than modify or delete the data that they entered.<br/> 
                                The website than create a Cv template with all the data that the user entered and than the user can download it or print it out.</p>
                        </div>
                    </div>
                </div> 
                <video poster={cvImg} className="videoContainer" loop muted preload="none" onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} onClick={(e)=>clickVideo(cvBtn)}>
                    <source src={cv} type="video/mp4"/>
                </video>
                <div className="descriptionContainerRight">
                    <div className="titleContainer">
                        <h3 className="projectTitle">Cv Builder</h3>
                        <div className="linkPage">
                            <a className="link" href="https://github.com/Bacco40/cv_creator" target="_blank" rel="noreferrer">
                                <div className="linkTitle">GitHub</div>
                            </a>
                            <a className="link" href="https://bacco40.github.io/cv_creator/" target="_blank" rel="noreferrer">
                                <div className="linkTitle">Live</div>
                            </a>
                        </div>
                    </div>
                    <div className="videoDescriptionRight">
                        <div className="videoDescription2">
                            <p className="videoP">A cv builder website. <br />
                                The project is made using <em>React.</em><br />
                                On the website users can build their CV by adding their data, their work experiences,
                                their education,their skills and than modify or delete the data that they entered.<br/> 
                                The website than create a Cv template with all the data that the user entered and than the user can download it or print it out.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <hr/>
    </section>
  );
}

export default Project;