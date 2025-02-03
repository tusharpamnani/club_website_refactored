"use client"

import React, { useEffect } from 'react'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Driver = () => {

    useEffect(() => {
        const tour = driver({
          showProgress: true,
          steps: [
            { element: "#navbar2", popover: { title: "Navbar", description: "Navbar Yha hai BC..." } },
          ],
        });
        tour.drive();
      }, []);

  return (
    <div></div>
  )
}

export default Driver