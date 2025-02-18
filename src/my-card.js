import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Jared MCcain";
    this.image = "https://static01.nyt.com/athletic/uploads/wp/2024/11/26003204/241126-Jared-McCain-scaled-e1732599303822.jpg";
    this.link = "https://www.espn.com/nba/player/stats/_/id/4683778/jared-mccain";
    this.fancy = false;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 16px;
      }
      :host([fancy]) .card {
        background-color: blue;
        color: white;
      }
      .card.toggled {
        background-color: red;
        border: 2px solid black;
        width: 400px;
        color: blue;
      }
      .card {
        background-color: blue;
        width: 400px;
        height: 600px
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        box-sizing; border-box;
      }
      .cardheader {
        color: red;
        margin: 10px 0;
        font-size: 40px;
        font-family: "Times New Roman", Times, serif;
      }
      img {
        width: 100%; 
        height: auto;
        max-width: 600px;
      }
      .btn {
        color: #4f2a06;
        background-color: white;
        font-size: 15px;
        margin: 0 0 5px 0;
      }
      .btn:focus,
      .btn:hover {
        background-color: blue;
        color: white;
      }
      details summary {
        text-align: center;
        font-size: 20px;
        padding: 8px 0;
        font-family: "Times New Roman", Times, serif;
        color: yellow;
      }
      details[open] summary {
        font-weight: bold;
      }
    `;
  }

  toggleFancy() {
    this.fancy = !this.fancy;
  }

  openChanged(e) {
    console.log(e.target.open);
  }

  render() {
    return html`
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
        <img src=${this.image} alt=${this.title} />
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot></slot>
            <p>This is a Basketball Player</p>
            <a href=${this.link} target="_blank">
              <button class="btn"><em>Details</em></button>
            </a>
          </div>
        </details>
        <button class="btn" @click="${this.toggleFancy}">Toggle Fancy</button>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);