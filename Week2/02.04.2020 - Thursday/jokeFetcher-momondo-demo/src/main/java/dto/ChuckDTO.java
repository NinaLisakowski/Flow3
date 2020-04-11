package dto;

public class ChuckDTO {
    private String id;
    private String created_at;
    private String value;

    public ChuckDTO() {
    }

    public ChuckDTO(String id, String created_at, String value) {
        this.id = id;
        this.created_at = created_at;
        this.value = value;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreatedDate() {
        return created_at;
    }

    public void setCreatedAt(String created_at) {
        this.created_at = created_at;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    
    
}
