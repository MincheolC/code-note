import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

export enum UserRole {
    ADMIN = 'admin',
    PARTNER = 'partner',
    MEMBER = 'member',
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.MEMBER
    })
    role: UserRole;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 50 })
    lastName: string;

    @Column({ comment: "0: male, 1: female" })
    gender: boolean;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    bDay: Date;

    @Column({ length: 10 })
    language: string;

    @Column({ nullable: true })
    profileUrl: string;

    @Column()
    isActive: boolean;

    @Column()
    lastActiveAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
