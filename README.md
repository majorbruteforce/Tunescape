# Routes

### /upload [POST]

    The request must contain :
        1. Music File (name: "music")
        2. Thumbnail Image file (name: "thumbnail");
        3. Song Information (
            body: {
                music: {
                    title: "title-input",
                    artist: "artist-input",
                    user: "username",
                    uid: "uid-from-firebase",
                    duration: "duration-of-song"

                }
            }

        )

### /toggle-song-like
    The request must contain :
        1. Song's mongo ID
        2. User's mongo ID
    The response is 1 for successful toggle and 0 for unsuccessful(String)
