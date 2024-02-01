import Godfather from "./Godfather.JPG"
import Shawshank from "./Shawshank.JPG"
import Forrest from "./Forrest.JPG"
import Goodfellas from "./Goodfellas.JPG"
import Godfather_V from "./GODFATHER_V.mp4"
import Shawshank_V from "./Shawshank_V.mp4"
import Forrest_V from "./Forrest_V.mp4"
import Goodfellas_V from "./GoodFellas_V.mp4"


const Movies = [
    {
        id: 1,
        posterURL: Godfather,
        title: "The Godfather",
        description:"The Godfather is a trilogy of American crime films, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        rating: 9.2 ,
        trailerLink: Godfather_V,
    },
    {
        id: 2,
        posterURL: Shawshank ,
        title: "The Shawshank Redemption",
        description:"Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment,Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        rating: 9.3 ,
        trailerLink: Shawshank_V ,
    },
    {
        id: 3,
        posterURL: Forrest ,
        title: "Forrest Gump",
        description:"Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events,The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        rating: 8.8 ,
        trailerLink: Forrest_V ,
    },
    {
        id: 4,
        posterURL: Goodfellas,
        title: "Goodfellas",
        description:"Henry grows up idolising mobsters in his impoverished neighbourhood. Things take a turn for the worse when he along with his friends Jimmy and Tommy decide to make their way up the mob hierarchy.",
        rating: 8.7 ,
        trailerLink: Goodfellas_V ,
    }
];

export default Movies