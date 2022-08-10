import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";
export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  // export const FEED_QUERY = gql`
  //   {
  //     feed {
  //       id
  //       links {
  //         id
  //         createdAt
  //         url
  //         description
  //         postedBy {
  //           id
  //           name
  //         }
  //         votes {
  //           id
  //           user {
  //             id
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index}></Link>
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
