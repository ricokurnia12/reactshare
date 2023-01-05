import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";
import { TelegramIcon } from "react-share";
import logo from "./logo.svg";
import "./App.css";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="sosmedshare">
                {" "}
                <TelegramShareButton
                    url={window.location.href}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TelegramIcon size={36} className="telegram" />
                </TelegramShareButton>
                <p>Telegram</p>
            </div>
        </div>
    );
}

export default App;
