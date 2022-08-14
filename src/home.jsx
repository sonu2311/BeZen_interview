import "./library.css";
import "./main.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Modal from "@mui/material/Modal";
import { DenseAppBar } from "./header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #eee",
  boxShadow: 24,
  pt: 1,
  px: 2,
  pb: 0,
};

function Card({ carddetails, cardDelete }) {
  const [title, setTitle] = React.useState(carddetails.title);
  const [content, setContent] = React.useState(carddetails.content);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <div className="card" onClick={handleOpen}>
        <div className="title_in_note">{title}</div>
        <div className="content_div">{content}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div>
          <Box sx={{ ...style, width: 400 }}>
            <div className="card_title_div">
              <input
                className="card_title_input"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                rows="15"
                cols="20"
                className="message_text"
                type="text"
                name="name"
                value={content}
                placeholder="Take a note"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div style={{ borderBottom: "solid #ddd 1px" }}></div>
            <div className="hsplit">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button size="small" onClick={handleClose}>
                    Save
                  </Button>
                </div>
              </Box>
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button
                    size="small"
                    onClick={() => cardDelete(carddetails.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Box>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export function Home() {
  const [cardList, setCardList] = React.useState([
    { title: "Note 1", content: "Write Your Note One.", id: 1 },
    { title: "Note 2", content: "", id: 2 },
    { title: "Note 3", content: "", id: 3 },
    { title: "Note 4", content: "", id: 4 },
  ]);

  const [counter, setCounter] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const addNewNote = function () {
    const newItem = {
      title: "Untitled Note" + counter,
      content: "",
      id: counter,
    };
    setCounter(counter + 1);
    setCardList([newItem, ...cardList]);
    setPage(1);
  };
  const cardDelete = function (note_id) {
    setCardList(cardList.filter((x) => x.id != note_id));
  };

  return (
    <>
      <DenseAppBar />
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "90px 1px" }}>
        <div className="hsplit">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="add_button">
              <Button onClick={addNewNote} variant="contained" disableElevation>
                Add New Note
              </Button>
            </div>
          </div>
        </div>
        <div className="hsplit">
          {cardList.slice(page * 6 - 6, page * 6).map((carddetails) => (
            <Card
              key={carddetails.id}
              carddetails={carddetails}
              cardDelete={cardDelete}
            />
          ))}
        </div>
        <div className="hsplit">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="add_button">
              <Pagination
                count={Math.ceil(cardList.length / 6)}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
