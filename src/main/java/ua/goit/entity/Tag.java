package ua.goit.entity;

import com.google.gson.annotations.SerializedName;

import java.util.Objects;

public class Tag {
    @SerializedName("id")
    private int id;
    @SerializedName("name")
    private String name;

    public Tag(int tagId, String name) {
        this.id = tagId;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Tag)) return false;
        Tag tag = (Tag) o;
        return getId() == tag.getId() && Objects.equals(getName(), tag.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName());
    }

    @Override
    public String toString() {
        return "Tag{" +
                "tagId=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
