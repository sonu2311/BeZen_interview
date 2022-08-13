import './library.css';
import React from 'react';

export function Header1() {
  return (
    <div className="hsplit" >
      <div>
        <a href="#/example1">
          <div className="link_box">Example1</div>
        </a>
      </div>
      <div>
        <a href="#/example2">
          <div className="link_box">Example2</div>
        </a>
      </div>
      <div>
        <a href="#/example3">
          <div className="link_box">Example3</div>
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const profile_name="sonu"
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)


  const menuOpenClose = function(){
    setIsMenuOpen(!isMenuOpen)
    console.log("isMenuOpen===", isMenuOpen)
  }

  return (
    <>
      <div className="head_div" >
        <div className="hsplit main_div">
            <div className="logo m20 " >
              <img src="images/logo.jpg" style={{height:"30px"}}/>
            </div>
            <div className="hsplit navbar_tabs" style={{float: 'right', marginRight: '25px'}}>
              <div className="show-md hide-xs show-sm heading">
                HOME
              </div>
              <div className="show-md hide-xs show-sm heading">
                DAPIBUS
              </div>
              <div className="show-md hide-xs show-sm heading">
                ULTRICES
              </div>
              <div className="show-md hide-xs show-sm heading ">
                BIBENDUM 
              </div>
             
              <div className="hide-lg hide-md show-xs show-sm" style={{paddingTop: '6px', cursor:'pointer'}}>
                <div className="menu" onClick={menuOpenClose}>
                  <span className="material-icons" style={{fontWeight: 600}}>
                    more_vert
                  </span>
                </div>

              {isMenuOpen && (
                <div style={{position: 'fixed', top: '62px', right: '23px', borderRadius: '2px', boxShadow: '1px 2px 3px #888888', cursor: 'pointer', zIndex: '100px', backgroundColor: '#fff'}} >
                  
                  <div className="hide-md show-xs hide-sm menu_div" style={{backgroundColor: '#eee'}}>
                    <div style={{marginLeft: '5px', fontSize: '15px', marginTop: '5px'}}>
                      HOME
                    </div>
                  </div>
                  <div className="menu_div" >
                    DAPIBUS
                  </div>
                  <div className="hide-md show-xs hide-sm menu_div" >
                    ULTRICES
                  </div>            
                  <div className="hide-md show-xs hide-sm menu_div ">
                    BIBENDUM  
                  </div>
                  <div className="menu_div">
                    MEGNA
                  </div>
                </div>
              )}

              </div>
            </div>
        </div>
      </div>
      <div style={{height: '57px'}} />
    </>

  )
}

