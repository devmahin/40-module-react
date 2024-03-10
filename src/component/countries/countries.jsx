import './countries.css';
const Countries = ({allData}) => {
    console.log(allData)
    const {name , flags} = allData;
    return (
        <div className='box'>
            <h5>Name : {name.common}</h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countries;