export class Anime {
    //Anime Ranking Table Attributes
    //FIRST PANEL
    id: string //AUTO INCREMENT
    name: string
    studio: string
    episodes: number
    season: string
    //SECOND PANEL
    platform: string
    // time_course: Date
    startDate: number
    endDate: number
    broadcast_day: string //what time its broadcasted
    hour: string
    duration: number
    // rating: string
    //THIRD PANEL
    // genres: string
    //FORTH PANEL
    // ranked: number // ranking rating position
    //FIFTH PANEL
    synopsis: string
    //------------
    imagePath: string
    rank: number
    score: number
    //SIXTH PANEL
    //USER STATS
    members: number
    Status: string //"Watching" "Completed" "on-hold" etc
    general_score: number // como fazer um atributo que faça média dos usuarios?

    constructor(
        name: string,
        studio: string,
        episodes: number,
        season: string,
        platform: string,
        // time_course: Date,
        startDate: number,
        endDate: number,
        broadcast_day: string, //what time its broadcasted
        hour: string,
        duration: number,
        // genres: string,
        synopsis: string,
        imagePath: string,
        rank: number,
        score: number
    ){
        this.name = name,
        this.studio = studio,
        this.episodes = episodes,
        this.season = season,
        this.platform = platform,
        // this.time_course = time_course,
        this.startDate = startDate,
        this.endDate = endDate
        this.broadcast_day = broadcast_day, //what time its broadcasted
        this.hour = hour,
        this.duration = duration
        // this.genres = genres,
        this.synopsis = synopsis,
        this.imagePath = imagePath,
        this.rank = rank,
        this.score = score
    }
}