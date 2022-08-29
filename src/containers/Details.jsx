import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  return (
    <div className="details">
      <article>
        <h2>
          Accident: Five killed after a trailer crashed into church buildings
        </h2>
        <h3>Isiolo , March 1, 2022 by Abduba Mamo</h3>
        <div>
          Five people were killed in a road accident after a trailer rammed into
          a Church buildings in Isiolo town after the vehicle’s brakes failed on
          Monday. Four of the deceased were pedestrians who included two pupils
          from a nearby primary school, two women and a loader of the trailer
          who died on the spot while 12 others sustained injuries. Isiolo County
          Deputy Police commander Mr. Nicholas Maina said the injured were
          rushed to Isiolo County Referral Hospital for treatment. Mr. Maina
          said that the trailer was ferrying powdered milk from Uganda to
          Moyale. Isiolo Deputy County Commissioner Mr. Kepha Marube who
          mobilized security teams to control traffic along Isiolo-Meru highway
          and protect the scene of the accident said two boys were going home
          from the school, but one of the women was a shopkeeper whose shop was
          damaged. Marube added that property of unknown value that belongs to
          East Africa Pentecostal Church (EAPC) that hosts a Salon, a Shop and
          the Church buildings were destroyed in the accident. The DCC urged the
          drivers and boda boda riders to be careful, especially when they
          approach the town since most of them ignore the bumps and road signs
          particularly the one that warns them against moving at a speed
          exceeding 50 kilometres per hour. The Kenya Red Cross Society Isiolo
          Cluster Action Team leader Mr. Abdikadir Ali said that two among the
          12 injured persons require specialized treatment due to the extent of
          injuries. A boda boda rider Mr. Eric Mwenda said that the road has
          claimed many lives and accused Kenya National Highway Authority
          (KEnHA) and County Government of failing to erect clear road sign
          boards along the road which witnesses numerous accidents. A former
          Isiolo North MP Joseph Samal sent a message of condolences to the
          bereaved families and appealed to drivers to be careful since the road
          has turned out to be dangerous for users.
        </div>
      </article>
    </div>
  );
};
