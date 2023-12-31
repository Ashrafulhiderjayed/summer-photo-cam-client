

const InstructorDetails = ({instructor}) => {
    const { photoURL, name } = instructor;
  return (
    <div className='card w-80 glass bg-slate-100 shadow-xl'>
      <figure>
        <img className="h-32" src={photoURL} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className="font-bold text-center">Instructor: <span className="text-primary "> {name}</span></h2>
      </div>
    </div>
    );
};

export default InstructorDetails;