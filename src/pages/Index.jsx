import React from "react";
import { Box, Input, Button, VStack, Heading, Text, Divider, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Initiated",
      description: "This is a mock-up and doesn't perform real searches.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          OSINT Tool Mock-up
        </Heading>
        <Text fontSize="lg">Enter an email, phone number, or social media account to search for related information.</Text>
        <Divider />
        <Input placeholder="Search by email, phone, or social media username" />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
        {/* This is just a placeholder for the results */}
        <Box p={4} mt={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md">
            Search Summary
          </Heading>
          <Text mt={2}>Results will be displayed here after a real search is performed. This could include summaries of data breaches, social media profiles, and other publicly available information.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
