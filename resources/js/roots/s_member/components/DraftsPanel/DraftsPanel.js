import  React from 'react';

const DraftsPanel = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*--------------------------------*/   }
                {  /*--------      Drafts      -------*/   }
                {  /*--------------------------------*/   }    
                <section className="drafts drafts_theme">
                        <div className="drafts__block">
                            {  /*---  Drafts > Block > Header  ---*/   } 
                            <header className="drafts__header drafts__header_modifier">
                                    <span className="drafts__header-square drafts__header-square_modifier"><i className="material-icons material-icons-outlined">   file_copy   </i> </span>

                                    <div className="drafts__header-content">
                                            <h1 className="drafts__header-content--title"> Drafts </h1>

                                            <p className="drafts__header-content--subtitle"> Dashboard | Drafts </p>
                                     </div>
                            </header>

                            {  /*---  Drafts > Block > Inner ---*/   } 
                            <div className="drafts__inner">
                                    {  /*---  Drafts > Block > Inner > Item   ---*/   }
                                     { props.draftsCollection.map((article,i) => 
                                        <div key={ i + 1 }  className="drafts__inner-item drafts__inner-item_modifier">
                                                <header className="drafts__inner-item-header">
                                                        <h2 className="drafts__inner-item-header--title">{ article.pub_title }</h2>
                                                 </header>

                                                <div className="drafts__inner-item-pub">
                                                        <span className="drafts__inner-item-pub--author">by  <strong>Damian Barszcz</strong></span>
                                                        <span className="drafts__inner-item-pub--type">type: <strong>  { article.pub_category ? "Review" : "Project" }  </strong></span>
                                                </div>

                                                <div className="drafts__inner-item-prop">
                                                        <div className="drafts__inner-item-prop--desc"> last modify: <strong> <Moment fromNow ago>{ article.updated_at }</Moment> ago </strong></div>
                                                        <div className="drafts__inner-item-prop--desc">words: <strong> { article.pub_body ? article.pub_body.replace(/\s/g, "").length  : no_words } </strong> </div>
                                                </div>
                                                                 
                                                <div className="drafts__inner-item-action">
                                                        <div className="drafts__inner-item-action-buttons">
                                                            <Link to={ `/member/drafts/${article.pub_category ? 'review' :  'project'}/continue/${article.pub_url }`}  className="btn--small app__button--blue" target="_self"> Continue </Link>
                                                            <a href="#" className="btn--small app__button--red" onClick={ (e) => this.getModal(e, article.pub_title, article.pub_url) } target="_self"> Delete </a>
                                                         </div>
                                                </div>
                                        </div>) }
                                </div>
                        </div>
                </section>
            </>
        )
}

export default DraftsPanel;