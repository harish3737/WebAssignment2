import React, { useState, useRef, useEffect,useId } from "react";
import axios from 'axios';
import "./tools.css";

export default function Tools() {

  const [notes, setNotes] = useState([])
  const tempNotes = useRef({});
  const [newsFeed, setNewsFeed] = useState([])

  const notesId = useId()
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a367c1941d034e3abdc646589ad33001").then((response) => {
      setNewsFeed(response.data.articles)
    })
  }, [])


  return (
    <section className="container">
      <h1 className="text-center">Tools</h1>
      <div className="notes-main">
        <b className="fs-3">Notes
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
            backgroundColor: "white", border: "none", color: "black"
          }}  >
            <i className="bi bi-plus-circle add-note"></i>
          </button></b>
        <div className="created-notes">
          <div className="card" >
            <div className="card-body">
              {notes.length === 0 ? <p>No Notes created</p> : notes.map((note, index) => {
                return (
                  <div className="d-flex justify-content-between mb-2">
                    <p>{note.text}</p>
                    <button type="button" className="btn btn-primary" onClick={() => setNotes((prevState) => prevState.filter((prev, prevIndex) => prevIndex !== index))}>Delete</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tab-index="-1" aria-labelledby={notesId} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={notesId}>Add Notes</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <textarea rows="5" style={{ width: "100%" }} onChange={(event) => {
                  let temp = { "text": event.target.value }
                  tempNotes.current = temp
                }} defaultValue={tempNotes.current.text} aria-describedby={notesId} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => {
                  setNotes(prevState =>
                    [...prevState, tempNotes.current]);
                }} data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-feed-main">
        <b className="fs-3">News Feed</b>
        <div className=" d-flex flex-wrap feed-container">
          {
            newsFeed.map((feed) => {
              return <div className="card news-feed" key={feed.title}>
                <b>{feed.title}</b>

                <div className="card-body">
                  {
                    <p>{feed.description} - <b>{feed.author}</b></p>

                  }
                </div>
              </div>
            })
          }
        </div>
      </div>

    </section>
  );
}