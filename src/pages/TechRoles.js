import roleData from "../data/RoleData";

function TechRoles() {
  return (
    <div className="my-24 md:my-32">
      <h2 className="text-xl md:text-3xl font-semibold text-midnight-moss pb-9 md:pb-12">
        Discover Tech Roles
      </h2>
      <div className="flex flex-col md:flex-row gap-11">
        {roleData.map((role, index) => (
          <div
            key={index}
            className="flex flex-col p-6 text-gray-700 bg-transparent shadow-lg max-w-xs"
          >
            <div className="shadow border-2 border-light-orange rounded-sm">
              <img
                src={role.image}
                alt={`${role.title} image`}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-xl font-bold text-midnight-moss pt-2">
                {role.title}
              </p>
              <p className="text-base text-midnight-moss pt-2">
                {role.shortDescription}
              </p>
              <div className="flex flex-wrap pt-2">
                {role.shortSkills.map((skill, index) => (
                  <div key={index} className="pe-1.5">
                    <p className="text-xs text-midnight-moss bg-light-orange rounded-full px-2 py-0.5 mt-1.5">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex justify-end mt-auto pt-3">
              <p className="text-sm font-semibold text-tropical-cyan">
                <a href={role.url}>Learn More</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechRoles;
