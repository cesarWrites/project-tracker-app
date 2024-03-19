// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); 
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);


// Fetch engagements data
  const fetchData = () => {
    axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=ENGAGEMENT TYPE')
      .then(response => {
        const engData = response.data.data.data;
        setData(engData);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Fetch industry data
  const fetchIndustryData = () => {
    axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=INDUSTRY')
    .then(response => {
      const industryData = response.data.data.data;
        setData1(industryData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  // Fetch Client type Data
  const fetchClientTypeData = () => {
    axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=CLIENT TYPE')
    .then(response => {
      const clientData = response.data.data.data;
        setData2(clientData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  // Fetch Signing Entities
  const fetchSigningEntityData = () => {
  axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=SIGNING ENTITY')
  .then(response => {
    const entityData = response.data.data.data;
      setData3(entityData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

// Fetch business unit data
const fetchBusinessUnits = () => {
    axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=BUSINESS UNIT')
    .then(response => {
      const unitsData = response.data.data.data;
        setData4(unitsData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Fetch capability data
 const fetchCapability = () => {
    axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=CLIENT TYPE')
    .then(response => {
      const capabilityData = response.data.data.data;
        setData5(capabilityData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
 }

 // Fetch Projects data
 const fetchProjects = () => {
  axios.get('http://34.125.226.2:3123/projects_service/projects')
  .then(response => {
    const projectsData = response.data.data;
      setData6(projectsData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


// Fetch all data 
  useEffect(() => {
    fetchData();
    fetchIndustryData();
    fetchClientTypeData();
    fetchSigningEntityData();
    fetchBusinessUnits();
    fetchCapability();
    fetchProjects();
  }, []);


  return (
    <DataContext.Provider value={{ data, data1, data2, data3, data4, data5, data6 }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;