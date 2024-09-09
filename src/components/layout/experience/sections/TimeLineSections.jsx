import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

function TimeLineSections() {
  return (
<div className="w-full sm:w-[32rem] h-full flex-center mx-auto">
  <Timeline>
    {/* Infograins Internship */}
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3 font-Varela text-customPink-500">
        <TimelineIcon color="deep-orange" />
        <Typography variant="h4" className="leading-none text-base sm:text-lg md:text-xl lg:text-2xl">
          Infograins
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography
          variant="small"
          className="font-normal text-white text-sm sm:text-base md:text-lg"
        >
          <strong>Position:</strong> Software Engineering Intern
          <br />
          <strong>Period:</strong> 1 month
        </Typography>
      </TimelineBody>
    </TimelineItem>

    {/* Kamal Gupta A & N Associate Internship */}
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3 font-Varela text-customPink-500">
        <TimelineIcon color="deep-orange" />
        <Typography variant="h4" className="leading-none text-base sm:text-lg md:text-xl lg:text-2xl">
          Kamal Gupta A & N Associate
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography
          variant="small"
          className="font-normal text-white text-sm sm:text-base md:text-lg"
        >
          <strong>Position:</strong> Juniorship
          <br />
          <strong>Period:</strong> 1 month
        </Typography>
      </TimelineBody>
    </TimelineItem>

    {/* Blender Commissions */}
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3 font-Varela text-customPink-500">
        <TimelineIcon color="deep-orange" />
        <Typography variant="h4" className="leading-none text-base sm:text-lg md:text-xl lg:text-2xl">
          Blender Commissions
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography
          variant="small"
          className="font-normal text-white text-sm sm:text-base md:text-lg"
        >
          <strong>Role:</strong> Freelancer
          <br />
          <strong>Period:</strong> 4 years
        </Typography>
      </TimelineBody>
    </TimelineItem>

    {/* Roblox Game Contribution */}
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3 font-Varela text-customPink-500">
        <TimelineIcon color="deep-orange" />
        <Typography variant="h4" className="leading-none text-base sm:text-lg md:text-xl lg:text-2xl">
          Roblox Game
        </Typography>
      </TimelineHeader>
      <TimelineBody>
        <Typography
          variant="small"
          className="font-normal text-white text-sm sm:text-base md:text-lg"
        >
          <strong>Contribution:</strong> Contributed to a game with 50K
          visits
        </Typography>
      </TimelineBody>
    </TimelineItem>
  </Timeline>
</div>

  );
}

export default TimeLineSections;
