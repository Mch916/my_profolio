import axios from "axios";
import { LeetCode as LC } from "leetcode-query";

const LeetCode = () => {
  
  const test = async () => {
    const leetcode = new LC();
    const user = await leetcode.user("username");

  }

  test();

  const getLeetCodeData = async () => {
    const options = {
      method: "POST",
      url: "https://leetcode.com/graphql",
      headers: {
        "content-type": "application/json",
        // "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
        // "x-rapidapi-key": process.env.REACT_PUBLIC_RAPIDAPI_KEY,
      },
      data: {
        query: `{ 
          matchedUser(username: "mch916w") {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const res = response.data; // Response received from the API
        console.log(res);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getCountries = async () => {
    const options = {
      method: 'POST',
      url: 'https://geodb-cities-graphql.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_PUBLIC_RAPIDAPI_KEY
      },
      data: {
        query: `{
          countries(namePrefix: "Ame") {
            edges {
              node {
                name
                capital
                currencyCodes
              }
            }
          }
        }`
      }
    };
    axios
      .request(options)
      .then(function (response) {
        const res = response.data; // Response received from the API
        console.log(res)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // getLeetCodeData();
  // getCountries();

  return (
    <>
      <div>TEST</div>
    </>
  );
};

export default LeetCode;
