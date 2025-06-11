import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.jpg?s=612x612&w=is&k=20&c=3kDIXmqAYp1o-3gt5fg7EvH9AK8D5pG_jqvovC5NQZ4=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";


    return(
        <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAIN_URL: info.temp > 15 ? HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature: {info.temp}°C</div>
            <div>Feels Like: {info.feelslike}°C</div>
            <div>Min Temperature: {info.tempMin}°C</div>
            <div>Max Temperature: {info.tempMax}°C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Weather: {info.weather}</div>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}