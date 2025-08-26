import { Box, Heading, Text, Card, CardHeader, Flex, Avatar, IconButton, CardBody } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";

const UserCard = ({ user }) => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={4}>
                    {/* Left */}
                    <Flex flex="1" gap={4} alignItems={"center"}>
                        <Avatar src="https://avatar.iran.liara.run/public" />
                        <Box>
                            <Heading size="sm">{user.name}</Heading>
                            <Text>{user.role}</Text>
                        </Box>
                    </Flex>

                    {/* Right */}
                    <Flex>
                        <EditModal />
                        <IconButton
                            variant="ghost"
                            colorScheme="red"
                            size="sm"
                            aria-label="Delete user"
                            icon={<BiTrash size={20} />}
                        />
                    </Flex>
                </Flex>
            </CardHeader>

            <CardBody>
                <Text>{user.description}</Text>
            </CardBody>
        </Card>
    );
};

export default UserCard;
