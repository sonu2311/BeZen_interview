import './library.css';
import './main.css';
import {Header} from './header';
import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useImmer } from './library';

function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Save</Button>
      </div>
    </Box>
  );
}

function Card({carddetails}) {
  const [title, setTitle] = React.useState(carddetails.title)
  const [content, setContent] =React.useState(carddetails.content)


  return (
    <div className="card" >
      {carddetails.id}
      <div className="card_field_name" >
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
      <div>
        <textarea  rows="5" cols="20" className="message_text" type="text"
          name="name" value={content} onChange={(e)=> setContent(e.target.value)}></textarea>
      </div> 
      <div style={{borderBottom: "solid #ddd 1px"}}></div>
      <div className="hsplit" >
          <Box sx={{ '& button': { m: 1 } }}>
            <div>
              <Button size="small">Save</Button>
            </div>
          </Box>
          <Box sx={{ '& button': { m: 1 } }}>
            <div>
              <Button size="small">Delete</Button>
            </div>
          </Box> 
      </div>
    </div>
  );
}

 export function Home(){
  const [cardList, setCardList] = React.useState([
      {title:"Project01",
       content: "",
       id:1
      },
      {title:"Project02",
      content: "",
      id:2
      },
      {title:"Project03",
      content: "",
      id:3
      },
      {title:"Project04",
      content: "",
      id:4
      }
    ])
  
  const [counter, setCounter] =React.useState(5) 

  const addNewNote = function(){
    const newItem = {title:"Project0333",
    content: "",
    id:counter}

    setCounter(counter+1)
    setCardList([newItem, ...cardList ])
    console.log("cardList===", cardList) 
  }

  return (
      <>
        <Header/>
        <div style={{maxWidth: "1200px", margin: "auto"}} >
          <button onClick={addNewNote}>Add new note</button>
          <div className="hsplit">
            {cardList.map((carddetails)=> (
              <div className="col-lg-4 col-sm-6 col-xs-12" >
                <Card key={carddetails.id} carddetails={carddetails}  />
              </div>
            ))}
          </div>
        </div>
      </>
  );
}