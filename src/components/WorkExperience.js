import Work from "./Work";

function WorkExperience({data}) {
    return <>
    <div>
        <h2>Work experience</h2>
        <div>
            {data.map((item, index) => (
                <Work key={index}
                      title={item.title}
                      description={item.description}
                      name={item.name}
                      link={item.link}
                      />
            ))}
        </div>
    </div>
    </>
};

export default WorkExperience;