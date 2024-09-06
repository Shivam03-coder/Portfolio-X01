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
    <div className="w-[32rem] h-full flex-center">
      <Timeline>
        {/* Infograins Internship */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3 font-Varela text-customPink-500">
            <TimelineIcon color="deep-orange"  />
            <Typography variant="h4"  className="leading-none">
              Infograins
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
             
              className="font-normal text-white text-lg"
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
          <TimelineIcon color="deep-orange"  />
            <Typography variant="h4"  className="leading-none">
              Kamal Gupta A & N Associate
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
             
              className="font-normal text-white text-lg"
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
          <TimelineIcon color="deep-orange"  />
            <Typography variant="h4"  className="leading-none">
              Blender Commissions
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
             
              className="font-normal text-white text-lg"
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
          <TimelineIcon color="deep-orange"  />
            <Typography variant="h4"  className="leading-none">
              Roblox Game
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
             
              className="font-normal text-white text-lg"
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
