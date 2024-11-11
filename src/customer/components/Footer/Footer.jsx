import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            About Us
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Our Team
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Careers
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Press
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Investors
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Contact Us
          </Typography>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Services
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Consulting
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Strategy
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Digital Marketing
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Web Development
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Product Design
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Customer Support
          </Typography>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Resources
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Blog
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            E-books
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Case Studies
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Events
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Community
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Help Center
          </Typography>
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            E-commerce
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Analytics
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Sales
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Marketing
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Customer Success
          </Typography>
          <Typography className="pb-5" variant="subtitle1">
            Integrations
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
