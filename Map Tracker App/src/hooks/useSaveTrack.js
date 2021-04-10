import { useContext } from 'react'
import LocationContext from '../context/LocationContext'
import TrackContext from '../context/TrackContext';

export default () => {

    const { data: { locations, name }, stopRecording } = useContext(LocationContext);
    const { createTrack } = useContext(TrackContext);
    
    
    const saveTrack = async (callback) => {
        stopRecording()
        createTrack(name, locations, callback)
    }

    return [saveTrack]
}