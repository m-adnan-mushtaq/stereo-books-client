import AnimateInView from "components/Ui/AnimateInView"
import "./defination.css"
const Defination = () => {
    return (
        <div style={{ textAlign: "center", p: '1em 2em' }}>
                <figure className="fancy-quote">
                    <h1 className="main-title">Audiobooks</h1>
            <AnimateInView
                variants={{
                    hidden: { rotateY: 180,transition:{delay:1} },
                    show: { rotateY: 0 },
                    }} >
                    <blockquote>
                        <p>An audio book is a recording of a text read aloud, either word for word or abridged. They are a convenient alternative to traditional books and an important media for the visually impaired. Audio books have come a long way since the 1930s when the first full length recordings appeared for people with disabilities. They were made available to the general public in the 1950s, but it wasn’t until the 1970s with the release of cassette tapes that popularity began to rise, especially among commuters while driving. Today, we no longer use bulky recording formats to listen to audio books. New digital devices with space for thousands of files allow you to carry a library around, and download or stream audio directly online. Popular audio formats like mp3 files play on the majority of digital devices. Platforms such as Google Books and Amazon, provide access to huge libraries of books, while smaller non-profit organizations, such as Librivox, allow public domain access to free audio books read by volunteers.</p>
                    </blockquote>
            </AnimateInView>
                </figure>
        </div>

    )
}

export default Defination