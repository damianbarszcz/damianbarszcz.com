import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ProjectsPanel = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                <section className="d_projects d_projects_theme">
                        <div className="d_projects__block">
                                {  /*---  D projects > Block > Header  ---*/   } 
                                <header className="d_projects__header d_projects__header_modifier">
                                        <span className="d_projects__header-square d_projects__header-square_modifier"><i className="material-icons material-icons-outlined"> devices </i> </span>

                                        <div className="d_projects__header-content">
                                                <h1 className="d_projects__header-content--title"> Projects </h1>

                                                <p className="d_projects__header-content--subtitle"> Dashboard | Projects </p>
                                         </div>
                                </header>

                                {  /*---  D projects > Block > Inner  ---*/   } 
                                <div className="d_projects__inner">
                                        {  /*---  D projects > Block > Inner > Item   ---*/   }
                                        { props.collection.map(article => 
                                         <div key={ article.id } className="d_projects__inner-item d_projects__inner-item_modifier">
                                                <header className="d_projects__inner-item-header">
                                                        <h2 className="d_projects__inner-item-header--title">{ article.pub_title }</h2>

                                                        <span className="d_projects__inner-item-header--desc"> <LinesEllipsis text={ article.pub_subtitle } maxLine='3' ellipsis='...' trimRight /> </span>
                                                 </header>

                                                <div className="d_projects__inner-item-pub">
                                                        <span className="d_projects__inner-item-pub--author">by  <strong>Damian Barszcz</strong></span>

                                                         <span className="d_projects__inner-item-pub--date">published: <strong><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment>  </strong></span>
                                                 </div>

                                                { article.pub_tags &&
                                                <div className="d_projects__inner-item-tags">
                                                        <div className="d_projects__inner-item-tags-item d_projects__inner-item-tags-item_modifier">{ article.pub_tags  ? article.pub_tags  : '' }</div>
                                                 </div> }
                                                                
                                                 <div className="d_projects__inner-item-action">
                                                        <div className="d_projects__inner-item-action-buttons">
                                                                <Link to={`/member/projects/edit/${article.pub_url}`}  className="btn--small app__button--blue" target="_self"> Edit </Link>
                                                                        <button  className="btn--small app__button--red" onClick={ (e) => this.getModal(e,article.pub_title, article.pub_url) } target="_self"> Delete </button>
                                                        </div>
                                                </div>
                                        </div>)  }
                                </div>
                        </div>
                </section>
            </>
        )
}

export default ProjectsPanel;