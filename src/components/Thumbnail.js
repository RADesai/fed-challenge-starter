import React from 'react'

function Thumbnail(props) {
    const { course, onClick, active } = props;
    const requestImageFile = (filename) => require.context('../assets/images', true, /.jpg$/)(filename).default;

    const getWorkoutsOverlay = () => (
        <>
            <div className="col-start-3 row-start-1 z-10 bg-black bg-opacity-50 rounded-tr-md"></div>
            <div className="col-start-3 row-start-3 z-10 bg-black bg-opacity-50"></div>
            <div className="col-start-3 row-start-2 z-10 px-2 bg-black bg-opacity-50">
                <div className="text-xl self-center text-white z-10">
                    <span className="text-lg font-bold">{course.workouts}</span>
                    <br/>
                    <span className="text-gray-200 text-xs uppercase tracking-wide">Workouts</span>
                    <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 mx-auto">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </>
    )

    const getCourseSpecs = () => (
        <>
            <div className="flex text-xs font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-1">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{course.length}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 ml-2 mx-1">
                    <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                </svg>
                <div>{course.distance}</div>
            </div>
        </>
    )

    return (
        <button className="grid grid-cols-1 m-3 rounded-md shadow-md focus:shadow-xl focus:outline-none focus:ring-2 ring-opacity-50" onClick={onClick}>
            <div className="grid grid-cols-3">
                { course.workouts > 0 && getWorkoutsOverlay() }
                <div className="col-start-1 col-span-3 row-start-1 row-span-3 rounded-t-md">
                    <div className="col-span-3 row-span-2">
                        <img src={requestImageFile(`./${course.label}-thumb.jpg`)} alt={course.label} className="inset-0 w-full object-cover rounded-t-md" />
                    </div>
                </div>
            </div>
            <div className="col-start-1 row-start-2 py-2 px-3 text-gray-600 text-left">
                <img src={requestImageFile(`./${course.label}-trainer.jpg`)} className="w-6 h-6 rounded float-right bg-gray-100" alt={`${course.label}-trainer`} />
                <div className="text-md font-bold mb-2">{course.name}</div>
                { course.length && course.distance && getCourseSpecs() }
            </div>
            <div className={`col-start-1 row-start-3 pb-2 px-3 text-left ${active ? 'visible' : 'invisible'}`}>
                <button type="button" className="text-blue-500 font-bold rounded-lg uppercase tracking-wide animate-pulse">View Details</button>
            </div>
        </button>
    )
}

export default Thumbnail
