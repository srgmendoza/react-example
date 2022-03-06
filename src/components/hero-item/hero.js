import { Avatar } from "@mui/material"
import { getImageUrl } from "../../utils/httpUtils"
import './hero-item.css'


export const Hero = ({ hero }) => {
    let imageUrl = getImageUrl(hero.thumbnail.path,hero.thumbnail.extension)
    return <div className="Hero-item">
                <Avatar 
                    className="avatar"
                    alt={hero.name} 
                    src={imageUrl} 
                    sx={{ width: 56, height: 56 }}/>
                <h1>{hero.name}</h1>
            </div>
}
