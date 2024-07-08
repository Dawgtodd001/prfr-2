import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboardService';

export const useDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    dashboardService.getData().then(setData);
  }, []);

  return { data };
};
