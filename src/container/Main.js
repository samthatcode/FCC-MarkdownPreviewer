import React, {Component} from 'react';
import utils from '../utils';
import TextBox from '../components/TextBox';
import TextToMarkdown from '../components/TextToMarkdown';
import marked from 'marked';
import style from './Main.css';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: utils.getText()
        }
    }

    // get the text value and use markdown
    // do change the body text
    handleTextChange(text) {
        this.setState({text});
    }

    render() {
        return (
            <div>
                <div className={style.title}>
                    Markdown Previewer
                </div>
                <div className={style.container}>
                    <div className={style.flex}>
                        <div className={style.center}>
                            <TextBox text={this.state.text} onTextChange={this.handleTextChange.bind(this)}/>
                        </div>
                        <div className={style.center}>
                            <TextToMarkdown html={marked(this.state.text, {
                                gfm: true,
                                smartLists: true,
                                sanitize: true,
                                smartyPants: true
                            })}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
