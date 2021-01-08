import React, { Component } from "react"

export default class YourComponent extends Component {
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
        </div>
      </div>
    )
  }
}