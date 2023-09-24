import { Container, Box } from "@mui/material"

function NewsCard({title, author, date, url}){

    return(
        <Box className="news-card-container">
                    <h1>{title}</h1>
                    <p>
                    {author}
                    </p>
                    <div class="date">{date}</div>
                    <a href = {url}>Read More</a>
        </Box>
    )
}

export default NewsCard